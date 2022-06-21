const StringHelper = {
    email: {
        getEmailName: (email: string) => {
            return email.split('@').shift()
        }
    }
}

export default StringHelper;