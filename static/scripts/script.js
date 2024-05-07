$().ready(() => {
    const NAMES = ['Engineer', 'Software']
    NAMES.forEach((value) => {
        setTimeout(() => {
            $('.code').text = value
        })
    })
})