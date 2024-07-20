<script>
    import Snippet from "$lib/components/Snippet.svelte";
</script>

<h3>Add Conditional Syntax to a Normal For Loop</h3>
<p>
    Quite often, I am using a for loop with an if statement to output or process an item from an iterable based on a certain condition. 
    I really like the syntax from list comprehensions:
    <Snippet code='
    [
        thing
        for thing in things
        if thing == "what I want"
    ]
    '/>
    It would be great if you can simplify the use case where a loop is cleaner/required to be able to use the conditional right in the for statement:
    
    <Snippet code='
for thing in things if thing == "what I want":
    process_thing(thing)
'/>
</p>
