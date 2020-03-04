$(document).ready(function(){
    var url = "https://pixabay.com/api/?key=14001068-da63091f2a2cb98e1d7cc1d82&q=red+flowers&image_type=photo&pretty=true";
    $.ajax({
        dataType: 'json',
        url: url,
        success: function(data){
            var result = "";
            data.hits.forEach(el => {
                result += `
                        <div class="card Shadow-lg mt-5">
                        <div class="card-header">
                            <img src="${el.userImageURL}" class="rounded-circle" width="40">
                            ${el.tags}
                            <!-- Button to Open the Modal -->
                            <button type="button" class="btn btn-primary float-right" data-toggle="modal" data-target="#myModal${el.id}">
                               View
                            </button>
    
                            <!-- The Modal -->
                            <div class="modal fade" id="myModal${el.id}">
                                <div class="modal-dialog">
                                <div class="modal-content">
                                
                                    <!-- Modal Header -->
                                    <div class="modal-header">
                                        <img src="${el.userImageURL}" class="rounded-circle" width="40">
                                        ${el.tags}
                                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    
                                    <!-- Modal body -->
                                    <div class="modal-body">
                                        <img src="${el.largeImageURL}" class="img-fluid">
                                    </div>
                                    
                                    <!-- Modal footer -->
                                    <div class="modal-footer">
                                    <ul class="list-group list-group-horizontal">
                                        <li class="list-group-item"> <i class="material-icons text-primary float-right">thumb_up</i>${el.likes} </li>
                                        <li class="list-group-item"> <i class="material-icons text-success float-right">comment</i>${el.comments} </li>
                                        <li class="list-group-item"> <i class="material-icons text-danger float-right">favorite_border</i>${el.favorites} </li>
                                        <li class="list-group-item"> <i class="material-icons text-info float-right">group</i>${el.views} </li>
                                       
                                    </ul>
                                    </div>
                                    
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <img src="${el.largeImageURL}" class="img-fluid">
                        </div>
                    </div>
  
                `;
            });
            $('#result').append(result);
        }
    });
});