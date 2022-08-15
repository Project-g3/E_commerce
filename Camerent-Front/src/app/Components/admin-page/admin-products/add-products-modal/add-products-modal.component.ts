import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/Services/admin/admin.service';
import { HttpService } from 'src/app/Services/http/http.service';
import { Products } from '../admin-products.model';
import { Storage,ref, uploadBytesResumable, getDownloadURL} from '@angular/fire/storage';

@Component({
  selector: 'app-add-products-modal',
  templateUrl: './add-products-modal.component.html',
  styleUrls: ['./add-products-modal.component.css']
})
export class AddProductsModalComponent implements OnInit {

  // for storing files from input
  file:any;
  // for storing files url
  fileUrl = new Array;

  change(event:any){
    this.file = event.target.files;
    console.log(this.file);
  }



  // Insert data to database
  add(data:any){
    let text = "Do you want to add the product";

    if(data.status=='VALID'){
      if(confirm(text)==true){
        console.log('true');
        console.log(data.value,data);
        // Starting of Firebase logic for upload of image
        for(let i=0;i<this.file.length;i++){
          const storageRef = ref(this.storage,`ProductsImg/${data.value.productId}/`+ this.file[i].name);
          const uploadTask = uploadBytesResumable(storageRef, this.file[i]);
    
    
          uploadTask.on('state_changed',
            (snapshot) => {
              // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
              const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              console.log('Upload is ' + progress + '% done');
              switch (snapshot.state) {
                case 'paused':
                  console.log('Upload is paused');
                  break;
                case 'running':
                  console.log('Upload is running');
                  break;
              }
            },
            (error) => {
              console.log(error);
            },
            () => {
              // Upload completed successfully, now we can get the download URL
              getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                console.log('File available at', downloadURL);
                this.fileUrl.push(downloadURL);
                // condition to check for all the download Url for files upload
                if(this.fileUrl.length==this.file.length){
                  console.log("insert function");
                  // service call to insert
                  let products = data.value;
                  products.imagesUrl=this.fileUrl;
                  this.adminServiceObj.addProduct(products);
                  alert('Data stored to database');
                  // this.router.navigate(['/admin-dashboard/products'])
                }
              });
            }
    
          )
        }
        
  
      }else{
        console.log('false');
      }
    }else{
      alert('Fill all the field before submitting !');
    }
  }

  
  constructor(private httpserobj:HttpService,private adminServiceObj: AdminService ,private router:Router,private storage:Storage) { }


  ngOnInit(): void {

    
  }

}
