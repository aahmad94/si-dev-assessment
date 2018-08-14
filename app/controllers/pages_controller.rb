class PagesController < ApplicationController
  def home
  end

  require 'twilio-ruby'

  def sms
    account_sid = "ACe4a5ff15f25259d20b84d04077fb655b"
    # ENV["ACCOUNT_SID"] # Account SID from www.twilio.com/user/account
    auth_token = "eb3418b3dd5bd0040144f1e7cad76933"
    # ENV["AUTH_TOKEN"]   # Auth Token from www.twilio.com/user/account
    
    @client = Twilio::REST::Client.new(account_sid, auth_token)
    @client.account.messages.create(
      body: params[:message],
      from: "+1 415 549 9844", 
      to: params[:number]
      )
    end
  end
  # ENV["TWILIO_NUMBER"],
