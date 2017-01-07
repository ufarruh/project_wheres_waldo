class TagsController < ApplicationController
  def index
  end

  def create
    @tag = Tag.new(tag_params)

    if @tag.save

      respond_to do |format|
        format.html { redirect_to tags_path }

        format.js { redirect_to :create_success }
      end
    end
  end


  private
    def tag_params
      params.require(:tag).permit( :user_id )
    end
end
