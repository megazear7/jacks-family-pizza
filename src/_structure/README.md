### What to do
Partials in this structure directory should use direct references to contextual data sources such as in this example:

```ejs
<!-- Use absolute references -->
<%- public._data.title %>

<!-- Use contextual data -->
<%- current.path %>
```

### What _NOT_ to do
Partials in the structure directory _should not_ rely only upon passed in data such as in the following example:

```ejs
<!-- Do not use the parameters that are passed into the partial -->
<%- title %>
```
