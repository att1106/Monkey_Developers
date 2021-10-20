const form = [
    {
        label: "Vorname",
        type: "text",
        textarea: false,
        name: "firstName",
        placeholder: "Vorname eingeben",
        validation: {
            required: {
                value: true,
                message: "Bitte füllen Sie dieses Feld aus."
            }
        },
    },
    {
        label: "Nachname",
        type: "text",
        textarea: false,
        name: "lastName",
        placeholder: "Nachname eingeben",
        validation: {
            required: {
                value: true,
                message: "Bitte füllen Sie dieses Feld aus."
            }
        },
    },
    {
        label: "Email",
        type: "email",
        textarea: false,
        name: "email",
        placeholder: "Email eingeben",
        validation: {
            required: {
                value: true,
                message: "Bitte füllen Sie dieses Feld aus."
            },
            pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Bitte geben Sie eine Email an."
              }
        },
    },
    {
        label: "Ihre Anfrage",
        textarea: true,
        name: "request",
        placeholder: "Worum geht es in Ihre Anfrage?",
        validation: {
            required: {
                value: true,
                message: "Bitte füllen Sie dieses Feld aus."
            }
        },
    },
]

export { form };