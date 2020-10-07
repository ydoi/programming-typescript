class Test {
  protected constructor (
    private status: string
  ) {}

  static create(status: string) {
    return new Test(status)
  }
}

class Test2 extends Test {
  call() {
    let test = new Test('')
  }
}