# frozen_string_literal: true

require 'sidekiq/web'

Sidekiq.configure_server do |config|
  config.redis = { url: ENV.fetch('REDIS_URL', 'redis://localhost:6379/2') }
end

Sidekiq.configure_client do |config|
  config.redis = { url: ENV.fetch('REDIS_URL', 'redis://localhost:6379/2') }
end

schedule_file = File.expand_path('../schedule.yml', __dir__)

if File.exist?(schedule_file) && Sidekiq.server?
  Sidekiq::Cron::Job.load_from_array(YAML.load_file(schedule_file))
end

Sidekiq::Web.set :session_secret, Rails.application.secrets[:secret_token]
Sidekiq::Web.set :sessions, Rails.application.config.session_options
