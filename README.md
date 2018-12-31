## Jacks Family Pizza
> An example pizza website created as a static website using harpjs.

jacksfamilypizza.alexlockhart.me

### Setup
```
npm install -g harp
git clone https://github.com/megazear7/jacks-family-pizza.git
```

### Development
```
harp server src
```

Go to localhost:9000

### Deployment
```bash
harp compile src docs
git add .
git commit -m "Recompiled."
git push origin master
```

Go to jacksfamilypizza.alexlockhart.me


### Implementation
This is using the Harp static site generator available at harpjs.com
