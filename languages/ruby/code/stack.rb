require_relative 'stacklike'
class Stack
  include StackLike
end

s = Stack.new
s.add_to_stack('item one')
s.add_to_stack('item two')
s.add_to_stack('item three')
s.add_to_stack('item four')
puts s.stack
