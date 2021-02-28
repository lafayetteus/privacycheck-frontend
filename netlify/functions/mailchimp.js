const mailchimp = require("@mailchimp/mailchimp_marketing")
const md5 = require("md5")
const xss = require("xss")

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

  const subscriber = JSON.parse(body)

  const {
    firstName = "",
    lastName = "",
    email = "",
    phone = "",
    message = "",
  } = subscriber

  const response = await mailchimp.lists.setListMember(
    mailchimpListID,
    md5(email.toLowerCase()),
    {
      email_address: xss(email),
      status_if_new: "subscribed",
      merge_fields: {
        FNAME: xss(firstName),
        LNAME: xss(lastName),
        PHONE: xss(phone),
        MMERGE5: xss(message),
      },
    }
  )

  console.log(
    `Successfully added contact as an audience member. The contact's id is ${response.id}.`
  )

  return {
    statusCode: 200,
    body: JSON.stringify({
      success: `Successfully added contact as an audience member`,
      response: response,
    }),
  }
}
