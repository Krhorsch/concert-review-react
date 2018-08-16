class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :artist, :venue, :date, :content
end
