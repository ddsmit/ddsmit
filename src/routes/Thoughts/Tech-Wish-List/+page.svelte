<h1>My Tech and Dev Wish List</h1>
<h2>Power BI</h2>
<h3>Ability to Leverage API to Get Authorization Data Based on User</h3>
<p>
    We leverage row level security quite a bit in our applications, and it would be great if you could provide an endpoint that 
    would provide the appropriate filtering data. If you could use the users log in to authenticate to the endpoint using SSO, 
    it would allow us to dynamiccaly provide the authorization data on request instread of precalculatin the table and loading the data.
    Another option could be allowing for session based refresh on a directquery data source with pass through credentials.
</p>
<h2>Azure Data Factory</h2>
<h3>Allow Dynamic Selection of a Linked Service from a Dataset</h3>
<p>
    We have a datafactory that is set up to handle some of our most common use cases. For all of the staging/quality check logic that
    interacts with a SQL database (ASQL, SQL Server with SQL Auth, SQL Server with Windows Auth), we end up duplicating logic 3 times. It 
    would be much cleaner and easier to maintain if a linked service could be dynamically selected by a dataset based on parameters passed 
    to the dataset.  
</p>
<h3>Allow Passing Pipelines Into Other Pipelines as Paramters</h3>
<p>
    To reduce complexity, it would be nice to pass in the pipeline that contains specific logic (IE a different source) into a 
    standard pipeline that performs other common tasks (ie metadata, status tables, quality checks). 
</p>
<h3>Allow Enum Types for Parameters</h3>
<p>
    We have several situations where we have a limited list of options we use to drive behavior. One example is if we want to 
    drop, truncate, or do nothing to the staging and final tables. We end up using a match statement against a string the user 
    enters, but this is a lot more error prone than an Enum with a drop-down would be. 
</p>
<h3>Better Keyboard Support</h3>
<p>
    For being a tool that developers will likely use, Azure Data Factory's interface doesn't seem to accomidate keyboard control 
    at all. There are small things like using Alt+Shift+D to bring up the dynamic menu, but once you do the focus isn't even put in the 
    field to add your expression. If you're entering parameters, tabbing moves between the page structure instead of between fields, and 
    there is no way to use the keyboard to edit the field without clicking. It would also be nice there were shortcuts to move between Factory Resoures
    (with arrows to cycle through the structure), activities, and the editing panel(s). It would also be good to be able to tab through
    any open pipelines (simular to Shift+tab on Edge). 
</p>
<h3>Make It Open Source</h3>
<p>
    I would personally address many of the issues if the tools was open source. Given that Microsoft as a whole is moving towards fabric,
    I don't think there is a big risk of allowing a competitive advantage to another company by doing this. 
</p>
<h2>Python</h2>
<h3>Add Conditional Syntax to a Normal For Loop</h3>
<p>
    Quite often, I am using a for loop with an if statement to output or process an item from an iterable based on a certain condition. 
    I really like the syntax from list comprehensions:
    <blockquote>
        [<br>
            thing<br>
            for thing in things
            if thing == "what I want"
        ]
    </blockquote>
    It would be great if you can simplify the use case where a loop is cleaner/required to be able to use the conditional right in the for statement:
    
    <blockquote>
        for thing in thing in thing == "what I want":
            process_thing(thing)
    </blockquote>