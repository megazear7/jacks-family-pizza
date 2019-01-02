### What to do
Partials in the components directory should rely only upon passed in data such as in the following example:

```ejs
<!-- Use the parameters that are passed into the partial -->
<%- title %>
```

### What _NOT_ to do
Partials in this components directory _should not_ make direct references to any contextual data source such as in this example:

```ejs
<!-- Do not use absolute references -->
<%- public._data.title %>

<!-- Do not use contextual data -->
<%- current.path %>
```
