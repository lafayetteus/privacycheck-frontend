const mailchimp = require("@mailchimp/mailchimp_marketing")
const md5 = require("md5")

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_TOKEN,
  server: process.env.MAILCHIMP_SERVER,
})

const mailchimpListID = process.env.MAILCHIMP_LIST_ID

exports.handler = async (event, context) => {
  const { body, httpMethod } = event
  if (httpMethod !== "POST") {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Invalid Request",
      }),
    }
  }
  const { firstName, lastName, email, phone, message } = JSON.parse(body)

  const response = await mailchimp.lists.addListMember(mailchimpListID, {
    email_address: email,
    status: "subscribed",
    merge_fields: {
      FNAME: firstName,
      LNAME: lastName,
      PHONE: phone,
      MMERGE5: message,
    },
  })

  console.log(
    `Successfully added contact as an audience member. The contact's id is ${response.id}.`
  )
  return {
    statusCode: 200,
    body: JSON.stringify({
      success: `Successfully added contact as an audience member. The contact's id is ${response.id}.`,
    }),
  }
}
