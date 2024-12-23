import {forkJoin} from 'rxjs';
import {HttpClient} from '@angular/common/http';

constructor (private http: HttpClient) {}

fetchData() {
  const apiCall1 = this.http.get(API_CALL1);
  const apiCall2 = this.http.get(API_CALL2);
  const apiCall3 = this.http.get(API_CALL3);

  forkJoin([apiCall1,apiCall2,apiCall3]).subscribe(
    results => {
      const [data1,data2,data3] = results;
      console.log(data1,data2,data3);
    }
  );
}
