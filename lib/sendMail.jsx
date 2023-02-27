export const sendMail = async (values) => {
    await fetch('/api/send_mail', {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    })
}
