export const registrationUser = async(userData) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/user`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
}