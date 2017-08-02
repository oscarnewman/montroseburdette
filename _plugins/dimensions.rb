require 'fastimage'

module Jekyll
  class DimensionsTag < Liquid::Tag

    def initialize(tag_name, url, tokens)
      super
      @path = url
    end

    def render(context)
      @path = context[@markup.strip][2..-1].sub(%r{^/},"").strip
      size = FastImage.size(@path)
      "#{size[0]}x#{size[1]}"
    end
  end
end

Liquid::Template.register_tag('dim', Jekyll::DimensionsTag)
