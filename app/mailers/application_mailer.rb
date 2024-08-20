class ApplicationMailer < ActionMailer::Base
  default from: ENV['SAMPLE_APP_MAILER_DEFAULT_FROM']
  layout 'mailer'
end
