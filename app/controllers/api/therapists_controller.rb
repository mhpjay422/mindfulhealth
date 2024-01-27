module Api
  class TherapistsController < ApplicationController
    def index
      therapists = Therapist.all.map do |therapist|
        {
          name: therapist.name,
          address: therapist.address,
          insurance: therapist.insurance,
          remote: therapist.remote,
          city: therapist.city,
        }
      end

      render json: therapists
    end
  end

end