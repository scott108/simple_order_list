export function orderGroupByStatus(orders, rules) {
  const ordersGroup = orders.sort((a, b) => {
    return a.status.code - b.status.code;
  }).reduce((groups, order) => {
    const group = groups.find(group => group.title === rules[order.status.code])
    if(!!group) {
      group.data.push(order)
      group.data.sort((a, b) => {
        if(a.date < b.date) {
          return 1;
        } else if(a.date > b.date) {
          return -1;
        }
        return 0;
      });
    } else {
      const initGroup = {
        title: rules[order.status.code],
        data: [order]
      }
      groups.push(initGroup)
    }
    return groups
  }, [])
  return ordersGroup
}