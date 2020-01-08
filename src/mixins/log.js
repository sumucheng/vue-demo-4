const log = {
    data() {
        return {
            message: 'hello'
        }
    },
    created() {
        console.log(this.message)
        console.log('mixin 对象的钩子被调用')
    }
}
export default log