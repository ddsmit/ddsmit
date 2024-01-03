<script>
    import Snippet from "$lib/components/Snippet.svelte";
</script>

<h3>Ability to Leverage API to Get Authorization Data Based on User</h3>
<p>
    We leverage row level security quite a bit in our applications, and it would be great if you could provide an endpoint that 
    would provide the appropriate filtering data. If you could use the users log in to authenticate to the endpoint using SSO, 
    it would allow us to dynamically provide the authorization data on request instead of precalculatin the table and loading the data.
    Another option could be allowing for session based refresh on a direct query data source with pass through credentials (using direct query 
    tends to send way more queries that would be needed for this use case).
</p>
