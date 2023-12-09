docker build --no-cache -f SQL\Dockerfile.PostgreSql -t humanresources/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t humanresources/app ../..
