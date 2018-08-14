class PagesController < ApplicationController
  def home
  end

  require 'twilio-ruby'

  def sms
    account_sid = ENV["ACCOUNT_SID"] # Account SID from www.twilio.com/user/account
    auth_token = ENV["AUTH_TOKEN"]   # Auth Token from www.twilio.com/user/account
    
    @client = Twilio::REST::Client.new(account_sid, auth_token)
    @client.account.messages.create(
      body: params[:message],
      from: ENV["TWILIO_NUMBER"],
      to: params[:number]
      )
  end
end
