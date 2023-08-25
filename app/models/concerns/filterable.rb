# frozen_string_literal: true

module Filterable
  extend ActiveSupport::Concern

  module ClassMethods
    def filter_collection(filtering_params)
      params = filtering_params.dup
      params.each do |k, v|
        params[k] = v.flatten.reject(&:blank?) if v.is_a?(Array)
      end

      params.select { |k, _| k.starts_with?('has_') }.each do |key, value|
        params[key] = ActiveRecord::Type::Boolean.new.deserialize(value)
      end

      params = params.reject { |_, v| v.blank? }

      results = default_filter_scope(params.keys)

      params.each do |key, value|
        results = results.public_send(key, value) if value.present?
      end

      results
    end

    def default_filter_scope(_keys)
      where(nil)
    end
  end
end
