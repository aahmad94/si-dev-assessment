class PagesController < ApplicationController
  def home
  end


  require 'twilio-ruby'
  
  def sms
    account_sid = params[:sid] # Your Account SID from www.twilio.com/console
    bug
    auth_token = params[:authtoken]
    @client = Twilio::REST::Client.new account_sid, auth_token
    message = @client.account.messages.create(:body => params[:message],
      :to => params[:number],    # Replace with your phone number
      :from => '+12407702486')  # Replace with your Twilio number
    raise: 'An error has occurred, please try again—make sure SID and Authorization Token are correctly entered and that the message is being sent to a number that has been validated by Twilio.'
    puts message.sid
  end
end
