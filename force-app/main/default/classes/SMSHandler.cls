public class SMSHandler {
	
    @AuraEnabled
    public static Boolean sendSMS(String bodyString, Id caseId) {
        TwilioSMS__c smsSettings = TwilioSMS__c.getOrgDefaults();


        Case c = [Select Id, Contact.Phone from Case where Id =:caseId limit 1][0];
        

        HttpRequest req = new HttpRequest();
        
        req.setEndpoint('callout:TwilioSMS/' + smsSettings.AccountSid__c + '/Messages.json');
        req.setMethod('POST');
        
        String body = '';
        body += 'From=' + (EncodingUtil.urlEncode(smsSettings.FromNumber__c, 'UTF-8'));
        body += '&Body=' +(EncodingUtil.urlEncode(bodyString, 'UTF-8'));
        body += '&To=' +(EncodingUtil.urlEncode(c.Contact.Phone, 'UTF-8'));
        
            
        req.setBody(body);
        Http http = new Http();
        HTTPResponse res = http.send(req);

        return res.getStatusCode() == 201;
    }
}