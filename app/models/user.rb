class User < ActiveRecord::Base
  # Include default devise modules.
  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable, :validatable,
          :omniauthable, password_length: 4..128
  include DeviseTokenAuth::Concerns::User

  validates :name, presence: true

  has_many :projects, dependent: :destroy
end
