  import { Component,OnInit ,ViewChild} from '@angular/core';
  import { UserService } from 'src/app/service/user.service';
  import { Response } from 'src/app/interface/response.interface';
  import { MatPaginator } from '@angular/material/paginator';
  import { MatTableDataSource } from '@angular/material/table';
  import { PageEvent } from '@angular/material/paginator';

  @Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css'],
    
  })

  export class UsersComponent implements OnInit{
    response: Response;
    totalItems = 0;
    pageSize = 10;
    pageIndex = 0;

    constructor(private userService: UserService) {}

    ngOnInit(): void {

      this.updatePaginator();
      this.userService.getUsers(50).subscribe(
        (results: any)=> {
          console.log(results);
          this.response=results;
          
          
        }
      );
      
    }

    
    displayedColumns: string[] = ['ID', 'Foto', 'Nombre', 'Email', 'Direccion', 'Telefono', 'Mas'];
    
    dataSource: MatTableDataSource<any>;

    

    @ViewChild(MatPaginator) paginator: MatPaginator;

    updatePaginator() {
      if (this.response?.results) {
        this.totalItems = this.response.results.length;
        this.dataSource = new MatTableDataSource<any>(this.response.results);
        this.dataSource.paginator = this.paginator;
        this.dataSource.paginator.pageSize = this.pageSize;
        this.dataSource.paginator.pageIndex = this.pageIndex;
      }
    }

    onPageChange(event: PageEvent) {
      this.pageSize = event.pageSize;
      this.pageIndex = event.pageIndex;
      this.updatePaginator();
    }
    
  }