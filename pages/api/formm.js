export default function handler(req, res) {
    const body = req.body
    console.log('body: ', body)

      if (!body.first || !body.last || !body.phone || !body.email || !body.resume ) {
      return res.json({ data: 'First or last name not found' })
    }
  
    res.json({ data: `${body.first} ${body.last} ${body.phone} ${body.email} ${body.resume}` })
  }
  