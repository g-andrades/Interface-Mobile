package br.cesul.pedidoCesul.vendedor;


import at.favre.lib.crypto.bcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/vendedor")
public class VendedorController {

    @Autowired
    private IVendedorRepository repository;
    @PostMapping("/salvar")
    public ResponseEntity salvar(@RequestBody VendedorModel vendedorModel){

        try{

            VendedorModel vendedorBanco = repository.findByEmail(vendedorModel.getEmail());

            if (vendedorBanco != null){
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Usuario ja cadastrado");

            }

            String password = BCrypt.withDefaults().hashToString(12, vendedorModel.getSenha().toCharArray());
            vendedorModel.setSenha(password);

            VendedorModel vendedor = repository.save(vendedorModel);
            return ResponseEntity.status(HttpStatus.OK).body(vendedor);


        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(vendedorModel);
        }

    }
    @PostMapping("/login")
    public ResponseEntity login(@RequestBody VendedorModel vendedor){
        return ResponseEntity.status(HttpStatus.OK).body(vendedor);
    }
}
