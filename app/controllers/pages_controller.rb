class PagesController < ApplicationController
  def home
  end

  require 'twilio-ruby'

  def sms
    #byebug
    #raise "Action sms in the UsersController is not implemented! received params #{params.to_json}"

    account_sid = ENV["ACCOUNT_SID"] # Your Account SID from www.twilio.com/user/account
    auth_token = ENV["AUTH_TOKEN"]   # Your Auth Token from www.twilio.com/user/account
    
    @client = Twilio::REST::Client.new(account_sid, auth_token)
    message = @client.account.messages.create(body: params[:message],
      from: ENV["TWILIO_NUMBER"],
      to: params[:number]
    )
  end
end
