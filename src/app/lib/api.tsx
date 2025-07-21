export const getToken = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_TOKEN_URL}`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `grant_type=client_credentials&client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}&client_secret=${process.env.NEXT_PUBLIC_CLIENT_SECRET}`
    })

    if(!res.ok) throw new Error("Failed to get Token")
    const { access_token } = await res.json()
    localStorage.setItem('token', access_token)
    return access_token
}

export const fetchWithAuth = async (url: string) => {
    const token = localStorage.getItem('token')

    let res = await fetch(url, {
        headers: {
            'Authorization' : `Bearer ${token}`
        }
    })

    if(res.status === 401){
        try{
            const newToken = await getToken()

            res = await fetch(url, {
                headers: {
                    'Authorization' : `Bearer ${newToken}`
                }
            })
        }catch(err){
            console.error(err)
            throw new Error("Session was ended")
        }
    }

    if(!res.ok){
        throw new Error("Failed to fetch data")
    }

    return res.json()
}