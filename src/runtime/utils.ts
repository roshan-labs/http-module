function bind<T>(func: Function, context: ThisType<T>) {
  return function wrap() {
    const args = new Array(arguments.length)

    for (let i = 0, len = args.length; i < len; i++) {
      args[i] = arguments[i]
    }

    return func.apply(context, args)
  }
}
