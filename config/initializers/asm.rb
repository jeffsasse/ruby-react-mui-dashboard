# frozen_string_literal: true

ActiveModelSerializers.config.adapter = :json
ActiveModel::Serializer.config.key_transform = :unaltered
ActiveModelSerializers.config.default_includes = "**"
