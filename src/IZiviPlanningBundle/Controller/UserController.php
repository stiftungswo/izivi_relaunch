<?php
namespace IZiviPlanningBundle\Controller;

use Nelmio\ApiDocBundle\Annotation\ApiDoc;
use IZiviPlanningBundle\Exception\InvalidFormException;
use FOS\RestBundle\Controller\Annotations;
use FOS\RestBundle\Request\ParamFetcherInterface;
use FOS\RestBundle\View\View;
use Symfony\Component\Form\FormTypeInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class UserController extends BaseController
{

    private $handlerSerivce = 'izivi.user.handler';

    /**
     * TODO: only allow for admin
     * List all Entities.
     *
     * @ApiDoc(
     * resource = true,
     * description="Gets a Collection of Users",
     * output = "IZiviPlanningBundle\Entity\User",
     * section="users",
     * statusCodes = {
     * 200 = "Returned when successful"
     * }
     * )
     *
     * @Annotations\View(
     * serializerEnableMaxDepthChecks=true,
     * serializerGroups={"List"}
     * )
     *
     * @Annotations\Route(requirements={"_format"="json|xml"})
     *
     * @param ParamFetcherInterface $paramFetcher
     *            param fetcher users
     *
     * @return array
     */
    public function getUsersAction(ParamFetcherInterface $paramFetcher)
    {
        return $this->container->get($this->handlerSerivce)->all($paramFetcher->all());
    }

    /**
     * TODO: only allow for admin
     * Get single Entity.
     *
     * @ApiDoc(
     * resource = true,
     * description="Gets the user with the given id",
     * output = "IZiviPlanningBundle\Entity\User",
     * section="users",
     * statusCodes = {
     * 200 = "Returned when successful",
     * 404 = "Returned when the page is not found"
     * }
     * )
     *
     * @Annotations\View(
     * serializerEnableMaxDepthChecks=true,
     * serializerGroups={"List"}
     * )
     *
     * @Annotations\Route(requirements={"_format"="json|xml"})
     *
     * @param int $id
     *            id of entry
     *
     * @return array
     */
    public function getUserAction($id)
    {
        return $this->getOr404($id, $this->handlerSerivce);
    }

    /**
     * Create a new Entity from the submitted data.
     *
     * @ApiDoc(
     * resource = true,
     * description = "Creates a new user from the submitted data.",
     * input = "IZiviPlanningBundle\Type\UserFormType",
     * output = "IZiviPlanningBundle\Entity\User",
     * section="users",
     * statusCodes = {
     * 201 = "Returned when successful",
     * 400 = "Returned when the form has errors"
     * }
     * )
     *
     * @Annotations\Route(requirements={"_format"="json|xml"})
     *
     * @Annotations\View(
     * serializerEnableMaxDepthChecks=true
     * )
     *
     * @param Request $request
     *            the request object
     *
     * @return FormTypeInterface|View
     */
    public function postUserAction(Request $request)
    {
        try {
            $newUser = $this->container->get($this->handlerSerivce)->post($request->request->all());
            return $this->view($newUser, Response::HTTP_CREATED);
        } catch (InvalidFormException $exception) {
            return $exception->getForm();
        }
    }

    /**
     * TODO: only allow update for current user
     * Update existing Entity.
     *
     * @ApiDoc(
     * resource = true,
     * input = "IZiviPlanningBundle\Type\UserFormType",
     * output = "IZiviPlanningBundle\Entity\User",
     * section="users",
     * statusCodes = {
     * 200 = "Returned when the Entity was updated",
     * 400 = "Returned when the form has errors",
     * 404 = "Returned when the Entity does not exist"
     * }
     * )
     *
     * @Annotations\Route(requirements={"_format"="json|xml"})
     *
     * @param Request $request
     *            the request object
     * @param int $id
     *            id of entry
     *
     * @return FormTypeInterface|View
     *
     * @throws NotFoundHttpException when entry does not exist
     *
     */
    public function putUserAction(Request $request, $id)
    {
        try {
            $entity = $this->getOr404($id, $this->handlerSerivce);
            $entity = $this->container->get($this->handlerSerivce)->put($entity, $request->request->all());
            return $this->view($entity, Response::HTTP_OK);
        } catch (InvalidFormException $exception) {
            return $exception->getForm();
        }
    }

    /**
     * TODO: only for admin
     * Delete existing Entity
     *
     * @ApiDoc(
     * resource = true,
     * section="users",
     * statusCodes = {
     * 204 = "Returned when successful",
     * 404 = "Returned when Code does not exist."
     * }
     * )
     *
     * @Annotations\Route(requirements={"_format"="json|xml"})
     * @Annotations\View(
     * serializerEnableMaxDepthChecks=true
     * )
     *
     * @param int $id
     *            id of entry
     *
     * @return FormTypeInterface|View
     *
     * @throws NotFoundHttpException when page not exist
     */
    public function deleteUserAction($id)
    {
        $this->container->get($this->handlerSerivce)->delete($this->getOr404($id, $this->handlerSerivce));
        return $this->view(null, Response::HTTP_NO_CONTENT);
    }

    /**
     * Get Curently Logged in User.
     *
     * @ApiDoc(
     * description="Return the currently logged in user Object",
     * section="users",
     * resource = true,
     * output = "IZiviPlanningBundle\Entity\User",
     * statusCodes = {
     * 200 = "Returned when successful",
     * 404 = "Returned when entity does not exist"
     * }
     * )
     *
     * @Annotations\Get("/users/current", name="_curentEmployee")
     */
    public function currentUserAction()
    {
        if (! ($user = $this->container->get($this->handlerSerivce)->current())) {
            throw new NotFoundHttpException(sprintf('The resource \'%s\' was not found.', $user->getId()));
        }
        return $user;
    }

    /**
     * Enable the user
     *
     * @ApiDoc(
     * description="Enable The user Specified by ID",
     * resource = true,
     * section="users",
     * statusCodes = {
     * 204 = "Returned when successful",
     * 404 = "Returned when entity does not exist"
     * }
     * )
     *
     * @Annotations\Route(requirements={"_format"="json|xml"})
     */
    public function enableEmployeeAction($id)
    {
        $this->container->get($this->handlerSerivce)->enable($this->getOr404($id, $this->handlerSerivce));
        return $this->view(null, Response::HTTP_NO_CONTENT);
    }
}