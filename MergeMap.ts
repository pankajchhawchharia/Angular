this.http.get(API_URL1).pipe(
    mergeMap(
      data1 => this.http.get(
        `API_URL2/${data1['id']}`
      )
    )
  ).subscribe(
    data2 => {
      console.log(data2);
    }
  )
