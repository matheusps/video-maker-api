const status = () => {
    return 'Just awessome API 👽'
}

const users = (parent, args, context) => {
    return context.prisma.users()
}

export { status, users }