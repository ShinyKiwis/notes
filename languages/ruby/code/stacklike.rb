module StackLike
  # What is ||= ?
  # This operator will set the variable to a specified value
  # If the value isn't already set to something other than nil or false
  def stack
    @stack ||= []
  end

  def add_to_stack(obj)
    stack.push(obj)
  end

  def take_from_stack
    stack.pop
  end
end
