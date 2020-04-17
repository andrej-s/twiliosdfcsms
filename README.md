# Send SMS over Twilio with Programmable SMS

This repository is an example of how to send SMS via Twilio over Salesforce.com. 

![UI Example](/media/SMSSFDC.gif?raw=true "UI Eample")

## Process
On pressing the SendSMS button, the Aura Controller fetches the message body and the customer number (stored in the Contact that is related to the case) and calls the Apex Controller. The Apex controller fetches a custom setting, determining from which Twilio Account the SMS should be sent to which number. It then uses Named Credentials to perform a callout to Twilio. Twilio delivers the SMS.

## Configuration

### Twilio Setup
You don't have a Twilio Account yet? Sign up on https://www.twilio.com/try-twilio and create one. You need a Twilio phone number for this demo.

In order to authenticate with Twilio, you need to create API Keys for Programmable SMS on  https://www.twilio.com/console/sms/project/api-keys

This application is provided as-is. Twilio does not officially support it.

### Salesforce Setup
Deploy the source code, containing
- an Apex Class that sends the SMS
- an Aura Component for the UI
- a custom settings object to store and retrieve the Twilio AccountSid and the according Twilio Phonenumber

On Salesforce, create `Named Credentials`. As Username, take the generated `API Key SID`, as password the `API Key Secret`.
![Named credentials](/media/namedcredentials.png?raw=true "Named credentials")

Go to custom settings and manage the `TwilioSMS` setting. Enter your AccountSid and the Twilio Phonenumber in E164 format.

Customize your case page and drag the SMS component any place you want.


## Questions?

Message [asaweljew@twilio.com](mailto:asaweljew@twilio.com) 

## License

MIT
	
## Contributors
	
- Andrej Saweljew <asaweljew@twilio.com>