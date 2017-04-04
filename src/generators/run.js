/**
 * Created by paddy on 04/04/17.
 */
'use strict'
import fs from 'fs'

const readFilePromise = (filename) => new Promise(
  (resolve, reject) => {
    fs.resolve(filename, (err, res) => {
      if (err) return reject(err)
      else return resolve(res)
    })
  }
)

readFilePromise('./foo.txt')
  .then(res => console.log(res))
  .catch(err => console.log(err))

const run = (generator, ...args) => {
  const ctx = this

  return new Promise(
    (resolve, reject) => {
      const gen = generator.apply(ctx, args)
      const step = (val) => {
        const res = gen.next(val)
        if (res.done) return resolve(res.value)

        res.value
          .then(res => step(res))
          .catch(err => reject(err))
      }
      step()
    }
  )
}

const process = (managerDN) => run(function * () {
  let returnVal = true
  while(returnVal){
    const result = yield getResult(managerDN)
    if (checkResult(result)) {
      returnVal = false
      return result
    }
  }
})

const checkResult = (managerDN) => {
  return managerDN ? true : false
}

const getResult = (input) => {
  let result = {}
  result.data = input
  return result
}

process('ManagerDN')
