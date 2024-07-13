<h1>TIL: The pains of the Python Azure Data Factory SDK</h1>
<h2>Why was I digging into this abyss</h2>
<p>
    Our team uses a couple common data factories to handle some of the most common data tasks. We recently ran into a limit that 
    would prevent us from migrating from the development environment to the productive environment. We decided to use a different 
    approach to parameters to bring down this limit, but we wanted to have the pipeline fully tested, which could be very time 
    consuming. 
</p>
<p>
    I had been wanting to look into the Python Azure Data Factory SDK for a while (I dream of creating a TUI interface that lets 
    me keyboard navigate my way through the pipelines), and automating the tests seemed like a good reason to dive in. 
</p>
<h2>So Why The Pain?</h2>
<p>
    The biggest pain I ran into was how highly nested the data structures are. From an API vs SDK consistency standpoint, it makes
    sense, but it felt really combersome to figure out. Also, I still have not found out how to get all of the information I need.
</p>