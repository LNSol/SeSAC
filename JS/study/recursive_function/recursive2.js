let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: {
          value: 5,
          next: {
            value: 6,
            next: {
              value: 7,
              next: {
                value: 8,
                next: {
                  value: 9,
                  next: {
                    value: 10,
                    next: null,
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};

const printLinkedList = function pl(obj) {
  let val = obj['value'];
  let next = obj['next'];

  if(next) {
    pl(next);
  }
  console.log(val);
};

printLinkedList(list);