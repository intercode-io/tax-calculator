import sgMail from '@sendgrid/mail';


export default function handler(req, res) {
    sgMail.setApiKey('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');

    let data = req.body;

    const msg = {
        to: 'pagor.n2003@gmail.com',
        from: 'leasingmotorsnewmessage@gmail.com',
        templateId: 'd-54dea20ca21449cbb73bf6ae407bcac9',
        dynamicTemplateData: {
            name: data?.name,
            phone: data?.phone,
        },
    }
    sgMail.send(msg)
        .then(() => {
            res.status(200).json('Ok');
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json('Error');
        });
}

