import jwt from 'jsonwebtoken'

const generateToken = (id) => {
  return jwt.sign({ id }, 'swadhin', {
    expiresIn: '30d',
  })
}

export default generateToken
