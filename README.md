<br/>
<p align="center">
  <img src="https://user-images.githubusercontent.com/25793226/162014483-9de512d8-84f2-4606-8e81-c0a7b661054e.png" width=200px />
<p/>
<h1 align="center">GraphQL Client</h1>
<p align="center">simple graphql client for browser (javascript)<p/>
<br/>
<br/>
<br/>

## Badges

[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Frhea-so-lab%2Fgraphql-client&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)

## Support

* query
* mutation
* subscription

## Install

```html
<script type="text/javascript" src="https://rhea-so-lab.github.io/graphql-client/module.js"></script>
```

## Usage

```html
<script type="text/javascript" src="https://rhea-so-lab.github.io/graphql-client/module.js"></script>

<script>
  const endpoint = 'rhea-so-lab-todo.herokuapp.com/graphql'
  const endpointHTTP = `https://${endpoint}`;
  const endpointWS = `wss://${endpoint}`;

  requestQuery(
    endpointHTTP,
    `
    query {
      todos {
        id
      }
    }
    `,
    (data) => {
      console.log(data);
    }
  )

  requestSubscription(
    endpointWS,
    `
    subscription {
      todos {
        id
      }
    }
    `,
    (data) => {
      console.log(data);
    }
  )
</script>
```

## Questions

* [Issue](https://github.com/rhea-so-lab/graphql-client/issues)
* [jeonghyeon.rhea@gmail.com](mailto:jeonghyeon.rhea@gmail.com?subject=[github]%20rhea-so-lab%20/%20graphql-client%20/%20question)

## Contributing

Welcome you to join the development of graphql-client.

Also, welcome PR or issue!

## License

UNLICENSED
