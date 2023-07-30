var documenterSearchIndex = {"docs":
[{"location":"api/#API","page":"APIs","title":"API","text":"","category":"section"},{"location":"api/","page":"APIs","title":"APIs","text":"Modules = [IntervalSets]\nOrder   = [:type, :function]","category":"page"},{"location":"api/#IntervalSets.AbstractInterval","page":"APIs","title":"IntervalSets.AbstractInterval","text":"A subtype of AbstractInterval{T} represents an interval subset of type T, that provides endpoints, closedendpoints.\n\n\n\n\n\n","category":"type"},{"location":"api/#IntervalSets.ClosedInterval","page":"APIs","title":"IntervalSets.ClosedInterval","text":"A ClosedInterval(left, right) is an interval set that includes both its upper and lower bounds. In mathematical notation, the constructed range is [left, right].\n\n\n\n\n\n","category":"type"},{"location":"api/#IntervalSets.Domain","page":"APIs","title":"IntervalSets.Domain","text":"A subtype of Domain{T} represents a subset of type T, that provides in.\n\n\n\n\n\n","category":"type"},{"location":"api/#IntervalSets.Interval","page":"APIs","title":"IntervalSets.Interval","text":"An Interval{L,R}(left, right) where L,R are :open or :closed is an interval set containg x such that\n\nleft ≤ x ≤ right if L == R == :closed\nleft < x ≤ right if L == :open and R == :closed\nleft ≤ x < right if L == :closed and R == :open, or\nleft < x < right if L == R == :open\n\n\n\n\n\n","category":"type"},{"location":"api/#IntervalSets.OpenInterval","page":"APIs","title":"IntervalSets.OpenInterval","text":"An TypedEndpointsInterval{:open,:open}(left, right) is an interval set that includes both its upper and lower bounds. In mathematical notation, the constructed range is (left, right).\n\n\n\n\n\n","category":"type"},{"location":"api/#IntervalSets.TypedEndpointsInterval","page":"APIs","title":"IntervalSets.TypedEndpointsInterval","text":"A subtype of TypedEndpointsInterval{L,R,T} where L and R are :open or :closed, that represents an interval subset of type T, and provides endpoints.\n\n\n\n\n\n","category":"type"},{"location":"api/#Base.Math.clamp-Tuple{Any, IntervalSets.TypedEndpointsInterval{:closed, :closed}}","page":"APIs","title":"Base.Math.clamp","text":"clamp(t, i::ClosedInterval)\n\nClamp the scalar t such that the result is in the interval i.\n\n\n\n\n\n","category":"method"},{"location":"api/#Base.findall-Union{Tuple{T}, Tuple{R}, Tuple{L}, Tuple{Base.Fix2{typeof(in), Interval{L, R, T}}, AbstractRange}} where {L, R, T}","page":"APIs","title":"Base.findall","text":"findall(in(interval), x::AbstractRange)\n\nReturn all indices i for which x[i] ∈ interval, specialized for the case where x is a range, which enables constant-time complexity.\n\nExamples\n\njulia> x = range(0,stop=3,length=10)\n0.0:0.3333333333333333:3.0\n\njulia> collect(x)'\n1×10 adjoint(::Vector{Float64}) with eltype Float64:\n 0.0  0.333333  0.666667  1.0  1.33333  1.66667  2.0  2.33333  2.66667  3.0\n\njulia> findall(in(1..6), x)\n4:10\n\nIt also works for decreasing ranges:\n\njulia> y = 8:-0.5:0\n8.0:-0.5:0.0\n\njulia> collect(y)'\n1×17 adjoint(::Vector{Float64}) with eltype Float64:\n 8.0  7.5  7.0  6.5  6.0  5.5  5.0  4.5  …  3.0  2.5  2.0  1.5  1.0  0.5  0.0\n\njulia> findall(in(1..6), y)\n5:15\n\njulia> findall(in(Interval{:open,:closed}(1,6)), y) # (1,6], does not include 1\n5:14\n\n\n\n\n\n","category":"method"},{"location":"api/#Base.mod-Tuple{Any, IntervalSets.TypedEndpointsInterval{:closed, :closed}}","page":"APIs","title":"Base.mod","text":"mod(x, i::AbstractInterval)\n\nFind y in the i interval such that x  y (mod w), where w = width(i).\n\nExamples\n\njulia> I = 2.5..4.5;\n\njulia> mod(3.0, I)\n3.0\n\njulia> mod(5.0, I)\n3.0\n\njulia> mod(2.5, I)\n2.5\n\njulia> mod(4.5, I)  # (a in I) does not imply (a == mod(a, I)) for closed intervals\n2.5\n\njulia> mod(4.5, Interval{:open, :closed}(2.5, 4.5))\n4.5\n\n\n\n\n\n","category":"method"},{"location":"api/#Base.range-Tuple{IntervalSets.TypedEndpointsInterval{:closed, :closed}}","page":"APIs","title":"Base.range","text":"range(i::ClosedInterval; step, length)\nrange(i::ClosedInterval, len::Integer)\n\nConstructs a range of a specified step or length.\n\n\n\n\n\n","category":"method"},{"location":"api/#Base.range-Tuple{IntervalSets.TypedEndpointsInterval{:closed, :open}}","page":"APIs","title":"Base.range","text":"range(i::Interval{:closed,:open}; length)\nrange(i::Interval{:closed,:open}, len::Integer)\n\nConstructs a range of a specified length with step=width(i)/length.\n\n\n\n\n\n","category":"method"},{"location":"api/#IntervalSets.:..-Tuple{Any, Any}","page":"APIs","title":"IntervalSets.:..","text":"iv = l..r\n\nConstruct a ClosedInterval iv spanning the region from l to r.\n\n\n\n\n\n","category":"method"},{"location":"api/#IntervalSets.:±-Tuple{Any, Any}","page":"APIs","title":"IntervalSets.:±","text":"iv = center±halfwidth\n\nConstruct a ClosedInterval iv spanning the region from center - halfwidth to center + halfwidth.\n\n\n\n\n\n","category":"method"},{"location":"api/#IntervalSets.closedendpoints-Tuple{AI} where AI<:AbstractInterval","page":"APIs","title":"IntervalSets.closedendpoints","text":"A tuple of Bool's encoding whether the left/right endpoints are closed.\n\n\n\n\n\n","category":"method"},{"location":"api/#IntervalSets.endpoints-Tuple{AI} where AI<:AbstractInterval","page":"APIs","title":"IntervalSets.endpoints","text":"A tuple containing the left and right endpoints of the interval.\n\n\n\n\n\n","category":"method"},{"location":"api/#IntervalSets.isleftclosed-Tuple{AbstractInterval}","page":"APIs","title":"IntervalSets.isleftclosed","text":"Is the interval closed at the left endpoint?\n\n\n\n\n\n","category":"method"},{"location":"api/#IntervalSets.isleftopen-Tuple{AbstractInterval}","page":"APIs","title":"IntervalSets.isleftopen","text":"Is the interval open at the left endpoint?\n\n\n\n\n\n","category":"method"},{"location":"api/#IntervalSets.isopenset-Tuple{AbstractInterval}","page":"APIs","title":"IntervalSets.isopenset","text":"Is the interval open?\n\n\n\n\n\n","category":"method"},{"location":"api/#IntervalSets.isrightclosed-Tuple{AbstractInterval}","page":"APIs","title":"IntervalSets.isrightclosed","text":"Is the interval closed at the right endpoint?\n\n\n\n\n\n","category":"method"},{"location":"api/#IntervalSets.isrightopen-Tuple{AbstractInterval}","page":"APIs","title":"IntervalSets.isrightopen","text":"Is the interval open at the right endpoint?\n\n\n\n\n\n","category":"method"},{"location":"api/#IntervalSets.leftendpoint-Tuple{AbstractInterval}","page":"APIs","title":"IntervalSets.leftendpoint","text":"The left endpoint of the interval.\n\n\n\n\n\n","category":"method"},{"location":"api/#IntervalSets.rightendpoint-Tuple{AbstractInterval}","page":"APIs","title":"IntervalSets.rightendpoint","text":"The right endpoint of the interval.\n\n\n\n\n\n","category":"method"},{"location":"api/#IntervalSets.searchsorted_interval","page":"APIs","title":"IntervalSets.searchsorted_interval","text":"searchsorted_interval(a, i::Interval)\n\nReturn the range of indices of a which is inside of the interval i (using binary search), assuming that a is already sorted. Return an empty range located at the insertion point if a does not contain values in i.\n\nExamples\n\njulia> searchsorted_interval([1,2,3,5], 2..4)\n2:3\n\njulia> searchsorted_interval([1,2,3,5], 4..1)\n4:3\n\njulia> searchsorted_interval(Float64[], 1..3)\n1:0\n\n\n\n\n\n","category":"function"},{"location":"api/#IntervalSets.width-Tuple{AbstractInterval}","page":"APIs","title":"IntervalSets.width","text":"w = width(iv)\n\nCalculate the width (max-min) of interval iv. Note that for integers l and r, width(l..r) = length(l:r) - 1.\n\n\n\n\n\n","category":"method"},{"location":"#IntervalSets.jl","page":"Home","title":"IntervalSets.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"A Julia package implementing IntervalSets.","category":"page"},{"location":"","page":"Home","title":"Home","text":"note: Documentation\nThe documentation is still work in progress. For more information, see alsoREADME in the repository\nTests in the repositoryFeel free to open pull requests and improve this document!","category":"page"},{"location":"#Installation","page":"Home","title":"Installation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"pkg> add IntervalSets","category":"page"}]
}
