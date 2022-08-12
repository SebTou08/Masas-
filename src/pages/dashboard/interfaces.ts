export interface IMasa{
  name: string; //NOMBRE DEL PRODUCTO
  price: number; //PRECIO DEL PRODUCTO 
  urlImage?: string; //URL DE LA IMAGEN DEL PROCUDTO
  description?: string; //DESCRIPCION DEL PRODUCTO
  size?: number; //TAMAÑO DEL PRODUCTO
  unitSize?: string; //UNIDAD DE MEDIDA DEL TAMAÑO DEL PRODUCTO
  destacado?: boolean; //SI ES CONSIDERADO UN PRODUCTO DESTACADO
  category?: number; //CATEGORIA : 0 -> MASA ***** 1-> LAGSAÑA  ******** 2 -> OTRA CATEGORIA
}